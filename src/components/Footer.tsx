import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <p className="text-sm text-gray-500">
             Blog Scope is your source for the latest tech news and insights. Stay informed with our expert articles and community discussions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-500">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-500">
                  Programming
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-500">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-3">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#b36d34] text-white -sm rounded-md hover:bg-[#b36d34]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Syeda Aliza Masood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
