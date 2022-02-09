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
    name: 'Code Complete: Practical Handbook of Software Construction',
    year: '2004'
  },
  {
    author: 'Gayle Laakmann McDowell',
    name: 'Cracking the Coding Interview',
    year: '2011'
  },
  {
    author: 'Andrew Hunt/David Thomas',
    name: 'The Pragmatic Programmer: From Journeyman to Master',
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
    <div>
      <div className="py-8 mb-12">
        <div className="py-2 px-8 items-center justify-center dark:bg-white bg-brblack text-white dark:text-brblack transition-colors text-center text-base rounded-lg w-fit m-auto">
          <p className="font-semibold">
            “An investment in knowledge always pays the best interest.”
          </p>
          <p className="text-sm">
            ― Andrew Hunt, The Pragmatic Programmer: From Journeyman to Master
          </p>
        </div>
      </div>
      <div className="mb-12">
        <h1 className="text-2xl font-bold pt-8 pb-3">
          Book Recommendations
          <span className="font-extrabold pl-1">_</span>
        </h1>
        <ul className="font-blackbird tracking-wide">
          {books.map(item => (
            <li key={item.name} className="flex justify-between">
              <span className="w-48">{item.author}</span>
              <p className="text-right">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Books
