const Emoji = ({ unicode, label }) => {
  const firstFilter = unicode.replace(/u/gi, 0);
  const secondFilter = firstFilter.replace(/\+/, 'x');
  const emojify = String.fromCodePoint(secondFilter)
  return (
    <span
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}>
      {emojify}
    </span>
  )
}

export default Emoji;
