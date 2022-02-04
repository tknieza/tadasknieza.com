import React from 'react'

const books = [
  {
    author: 'Steven Pressfield',
    name: 'The War of Art',
    year: '2011'
  },
  {
    author: 'John Sonmez',
    name: "Soft Skills: The software developer's life manual",
    year: '2014'
  },
  {
    author: 'Steven McConnell',
    name: 'Code Complete: A Practical Handbook of Software Construction',
    year: '2004'
  },
  {
    author: 'Gayle Laakmann McDowell',
    name: 'Cracking the Coding Interview',
    year: '2011'
  },
  {
    author: 'Andrew Hunt/David Thomas',
    name: 'The Pragmatic Programmer',
    year: '2000'
  },
  {
    author: 'Douglas Adams',
    name: "The Hitchhiker's Guide to the Galaxy",
    year: '2007'
  },
  {
    author: 'Sun Tzu',
    name: 'The Art of War',
    year: '2009'
  },
  {
    author: 'Bruce Eckel',
    name: 'Thinking in Java',
    year: '2006'
  },
  {
    author: 'Douglas Crockford',
    name: 'JavaScript - The Good Parts',
    year: '2008'
  }
]

function Books() {
  return (
    <div className="text-brblack dark:text-white">
      <h1 className="text-2xl font-bold pt-8 pb-3">
        Book Recommendations
        <span className="font-extrabold pl-1">_</span>
      </h1>
      <ul className="font-blackbird">
        {books.map(item => (
          <li key={item.name} className="flex justify-between">
            <span className="w-56">{item.author}</span>
            <p className="text-right">
              {item.name}, {item.year}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Books
