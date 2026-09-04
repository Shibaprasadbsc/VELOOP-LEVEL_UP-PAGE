function CurrentLevel({ level = 12 }) {
  return (
    <section className="current-level card">
      <div className="card-body">
        <p className="current-level__eyebrow">YOUR POSITION</p>
        <h3>Level {level}</h3>
        <p className="mb-0">Keep your streak active to reach the next reward faster.</p>
      </div>
    </section>
  )
}

export default CurrentLevel
