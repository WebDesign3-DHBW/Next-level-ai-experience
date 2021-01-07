import Chart from "./Chart";
// import handleViewport from "react-in-viewport";

// const Block = (props: { inViewport: boolean }) => {
//   const { forwardedRef } = props;

//   return (
//     <div className='viewport-block' ref={forwardedRef}>
//       <p>Hier könnte Ihr Chart sein!</p>
//     </div>
//   );
// };

// const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

function Section3() {
  return (
    <div className='container d-flex align-items-center' style={{ height: "100vh" }}>
      <div className='row'>
        <div className='col-8 mx-auto'>
          <h2 className='mb-2 text-center'>Bedeutung des Einsatzes von KI</h2>
          <p>
            Der Einsatz von KI wird von den meisten Unternehmen, die KI einsetzen (65 %), als
            wichtig für die Geschäftigkeit eingestuft. Für 12 % der KI einsetzenden Unternehmen ist
            KI essenziell für ihre Geschäftstätigkeit, d.h. ohne KI könnten die entsprechenden
            Aktivitäten gar nicht ausgeführt werden.
          </p>
        </div>
        <div className='col-12 mt-4'>
          {/* <ViewportBlock
            onEnterViewport={() => console.log("enter")}
            onLeaveViewport={() => console.log("leave")}
          /> */}
          <Chart />
        </div>
      </div>
    </div>
  );
}
export default Section3;
