type BoundedProps = {
  as? : React.ElementType,
  className : string,
  children : React.ElementType
}

const Bounded = ({
  as : Comp = "section",className,children,...restProps
}:BoundedProps) => {
  return (
    <>
      <Comp>
        <div className="mx-auto">

        </div>
      </Comp>
    </>
  )
}