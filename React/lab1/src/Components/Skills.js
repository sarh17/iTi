import './style.css'
function Skills(){
    return(
        <div className="rates m-4">

            <h1 className="bg-dark text-light text-center">Skills</h1>
                <p>HTML&CSS</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style={{width: "99%"}}>
            </div>
            </div>

            <br />
            <p>JavaScript</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style={{width: "99%"}}></div>
            </div>
            <br />
            <p>React</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style={{width: "89%"}}></div>
            </div>
            <br />
            <p>Nodejs</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style={{width: "89%"}}></div>
            </div>
            <br />
            <p>photoshop</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" sstyle={{width: "65%"}}></div>
            </div>
                </div>


    )
}
export default Skills