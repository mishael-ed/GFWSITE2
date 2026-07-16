function TracedText({ text }) {
  const middle = (text.length - 1) / 2

  return text.split('').map((char, i) => (
    <span
      key={i}
      className="letter"
      style={{ transitionDelay: `${Math.abs(i - middle) * 0.09}s` }}
    >
      {char === ' ' ? ' ' : char}
    </span>
  ))
}

export default TracedText
