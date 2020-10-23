
function M(){ //function component. props-gui
    return <h1>swvwev  <M1 ner="hello bat"/> </h1>;
}
function M1(props){ //function component. props-toi
return <h1>{props.ner}</h1>;
}
function Mend2(props){ //function component. props-toi olon html renderlen
    return(
        <div>
            <h1>{props.ner}</h1>
            <h1>{props.age}</h1>
            <p>{props.surbe ? "unen" : "choloo awsan"}</p>
            <p>{ props.duns[0]}</p>
            <p>{ props.duns[2]}</p>
            <p>{ props.duns[3]}</p>

            {props.duns.map(
                (el, index) =>
                    <p  key={index} ></p>
            )}  
            <p> {props.myobj.mer} </p>
            <p>{ props.myobj.index} </p>

        </div>
    )
}
function EtsegComp(props){
    return(
        <div>
            <M/>
            <M1 ner={props.ner}/>
            <Mend2 ner={props.ner} age={props.age}/>
            <table>
                <tr><td>{props.angi[0]}</td></tr> 
                <tr><td>{props.angi[1]}</td></tr> 
                <tr><td> {props.angi[2]}</td></tr> 
            </table>
        </div>
    )
}


ReactDOM.render(
    <div>
      {/* <M/>, */}
      {/* <M1 ner="hello bat"/>, */}
     <Mend2 ner="dorj" age="12" surbe={true} 
     duns={[80, "dalan yos",true]}
     myobj={{ mer:'sw', index:'sw18d023' } }/>
     {/* <EtsegComp ner="jems" age="20" angi={['пх','мс','нббмс']}/>, */}
     
    </div>,
    document.getElementById('root'));