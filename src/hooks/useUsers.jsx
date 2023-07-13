import { useQuery } from "@tanstack/react-query"

const useUsers=()=>{
const {data: usersa=[], refetch}= useQuery({
      queryKey:['users'],
      queryFn:async()=>{
            const res = await fetch(`https://user-management-server-flax.vercel.app/users/`);
            return res.json();
      }
})
return [usersa,refetch]
}

export default useUsers;