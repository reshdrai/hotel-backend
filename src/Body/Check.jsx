
import axios from 'axios'
function Check() {
  return (
    axios.get("http://localhost:8000/room/list/")
    .then((res)=>
    console.log(res)
    )
  )
}

export default Check