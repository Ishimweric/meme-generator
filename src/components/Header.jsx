function Header(){
  return(
    <header className="h-16 bg-gradient-to-r from-violet-700 to-violet-500 flex items-center px-4">
      <article className="flex gap-2">
        <img src="/icons/troll-face.png" className="h-10"/>
        <p className="text-2xl font-bold text-white">Meme Generator</p>
      </article>
    </header>
  )
}

export default Header