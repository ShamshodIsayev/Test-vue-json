import axios from 'axios'

const database = async () => {
  const uri = "http://localhost:3000/workers";
  const res = await axios.get(uri)
  return res.data
}

export default database