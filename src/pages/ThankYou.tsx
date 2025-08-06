const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-8">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
      <p className="mb-6">Click below to download your book:</p>
      <a
        href="/api/download"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        download
      >
        Download Book
      </a>
    </div>
  )
}
export default ThankYou