import { useQuery } from "@tanstack/react-query"

const useUsers=()=>{
const {data: usersa=[], refetch}= useQuery({
      queryKey:['users'],
      queryFn:async()=>{
            const res = await fetch(`http://localhost:3000/users/`);
            return res.json();
      }
})
return [usersa,refetch]
}

export default useUsers;