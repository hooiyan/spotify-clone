export default function CardGroup(props) {
  const classes =
    'pl-8 grid gap-4 grid-flow-col-dense grid-cols-5 w-full mb-24 ' +
    props.className

  return <div className={classes}>{props.children}</div>
}
