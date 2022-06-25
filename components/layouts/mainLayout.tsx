import Header from '../header'



export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="app-container">
        <main>
          { children }
        </main>
      </div>        
    </>
  )
}
