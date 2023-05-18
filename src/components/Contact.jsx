
const Contact = () => {
    return (
        <div >
            <h1>Contact</h1>
            <p>Radno vreme: </p>
            <table className="working-hours">
            <tbody>
                <tr>
                    <td className="day">ponedeljak</td>
                    <td className="hours">00-24</td>
                </tr>
                <tr>
                    <td className="day">utorak</td>
                    <td className="hours">00-24</td>
                </tr>    
                <tr>
                    <td className="day">sreda</td> 
                    <td className="hours">00-24</td>
                </tr>
                <tr>
                    <td className="day">cetvrtak</td>
                    <td className="hours">00-24</td>
                </tr>
                <tr>
                    <td className="day">petak</td>
                    <td className="hours">00-24</td>
                </tr>
                <tr>
                    <td className="day">subota</td>
                    <td className="hours">free</td>
                </tr>
                <tr>
                    <td className="day">nedelja</td>
                    <td className="hours">free</td>
                </tr>
            </tbody>
            </table>

            
            <p className="podaci">
                Magic mushroom D.O.O. <br/>
                ulica Bulevar Kralja Aleksandra bb <br/>
                tel: 011/123456 <br/>
                mob: 064/123456 <br/>
                mail: abvgd@gmail.com     
            </p>



        </div>
    )
}

export default Contact;