import { useState, useEffect } from "react"

const Home =()=>{
    const [navbar, setNavbar] =useState('')
    const [dropMenu1, setDropmenu1] = useState('')
    const [dropMenu2, setDropmenu2] = useState('')
    const [dropMenu3, setDropmenu3] = useState('')
    const [userId, setUserId] =useState()
    const heading = ["Navbar","dropMenu1","dropMenu2","dropMenu3","Crud"]


    const [getdata, setGetdata] =useState([])
    const getData =async()=>{
        const res =await fetch("http://localhost:5001/NavBar");
        const actualData =await res.json();
        setGetdata(actualData)
    }
    useEffect(()=>{
     getData()
    },[])

    const handleSubmit =(e)=>{
        e.preventDefault()
        const record = {navbar,dropMenu1,dropMenu2,dropMenu3}
        fetch("http://localhost:5001/NavBar",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(record)
        }).then(()=>{
            console.log("success")
        })
      }
      const handleDeleteButton =(id)=>{
           fetch(`http://localhost:5001/NavBar/${id}`,{
            method:"DELETE"
           }).then(()=>{
              getData();
           })
      }
      const selectPrefilledValue =(id)=>{
        const elem = getdata[id-1]
        setNavbar(elem.navbar)
        setDropmenu1(elem.dropMenu1)
        setDropmenu2(elem.dropMenu2)
        setDropmenu3(elem.dropMenu3)
        setUserId(elem.id)
      }
      const handleUpdateButton =()=>{
        const records ={navbar,dropMenu1,dropMenu2,dropMenu3}
        fetch(`http://localhost:5001/NavBar/${userId}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(records)
        }).then(()=>{
            getData()
        })
      }
    return(
        <>
          <div className="main-form mt-3">
           <form onSubmit={handleSubmit}>
                <p className="text-center">Add New Navigation...</p>
                <input type="text" value={navbar} onChange={(e)=>setNavbar(e.target.value)}placeholder="Enter Navigation Name.."/>
                <input type="text" value={dropMenu1} onChange={(e)=>setDropmenu1(e.target.value)}placeholder="Enter dropMenu1.."/><br/>
                <input type="text" value={dropMenu2} onChange={(e)=>setDropmenu2(e.target.value)}placeholder="Enter dropMenu2.."/>
                <input type="text" value={dropMenu3} onChange={(e)=>setDropmenu3(e.target.value)}placeholder="Enter dropMenu3.."/><br/>
                <button className="submit-btn">Submit</button>
                <button className="submit-btn" onClick={handleUpdateButton}>Update</button>
          </form>
        </div>
        
           <div className="container">
            <table className="table table-responsive mt-5">
                 <thead>
                    <tr>
                        {heading.map((head)=>{ return <th>{head}</th>})}
                    </tr>
                 </thead>
                 <tbody>
                    {
                       getdata.map((list)=>{
                        return(
                            <tr>
                                <td>{list.navbar}</td>
                                <td>{list.dropMenu1}</td>
                                <td>{list.dropMenu2}</td>
                                <td>{list.dropMenu3}</td>
                                <td>
                                     <i className="bi bi-trash text-danger" onClick={()=>handleDeleteButton(list.id)}></i>
                                     <i className="bi bi-pencil-square text-success" onClick={()=>selectPrefilledValue(list.id)}></i>
                                </td>
                            </tr>
                        )
                       })
                    }
                 </tbody>
            </table>
            </div>
        </>
    )
}
export default Home;