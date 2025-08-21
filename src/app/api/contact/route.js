import { NextResponse } from 'next/server'
import Database from 'better-sqlite3'
import path from 'path'

// Initialize database
const dbPath = path.join(process.cwd(), 'data', 'contacts.db')
const db = new Database(dbPath)

// Create table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    service TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, service, message } = body
    
    // Insert into database
    const stmt = db.prepare(`
      INSERT INTO contacts (name, email, company, phone, service, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `)
    
    const result = stmt.run(name, email, company, phone, service, message)
    
    return NextResponse.json({ 
      success: true, 
      id: result.lastInsertRowid 
    }, { status: 200 })
    
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to save contact' 
    }, { status: 500 })
  }
}