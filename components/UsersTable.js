import users_table from '../styles/components/_users_table.module.scss'
import React, { useEffect, useState } from 'react';
import Home from '../pages';
function UsersTable() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let res = await fetch("https://i918n57v1j.execute-api.us-east-1.amazonaws.com/prod/getusers", {
                    method: "GET"
            });
            let resJson = await res.json();
            if (res.status === 200) {
                console.log('success')
                return resJson
            } 
            } catch (err) {
            console.log(err);
            }
        }
        fetchData().then((data)=>{
            setUsers(JSON.parse(data))
        })
    },[])

    // useEffect(() =>{
    //     console.log(users)
    //     console.log(typeof(users))
    //     users.forEach((user)=>{
    //         console.log(user)
    //     })
    // },[users])

  return (
    <div>
        <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
        <section className={`py-20 lg:py-[60px] ${users_table.section}`}>
        <div className={`${users_table.container} container`}>
            <div className="flex flex-wrap -mx-4 justify-center">
                <div className="w-3/4 px-4">
                    <div className="max-w-full overflow-x-auto">
                    <table className={`${users_table.table} table-auto w-full`}>
                        <thead>
                            <tr className={`${users_table.table_header} text-center`}>
                                <th
                                className="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                border-l border-transparent
                                "
                                >
                                Email
                                </th>
                                <th
                                className="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                "
                                >
                                First Name
                                </th>
                                <th
                                className="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                "
                                >
                                Last Name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((data,id)=>{
                                return <tr key={id}>
                                <td
                                className="
                                text-center text-dark
                                font-medium
                                text-base
                                py-5
                                px-2
                                bg-[#F3F6FF]
                                border-b border-l border-[#E8E8E8]
                                "
                                >
                                {data.email}
                                </td>
                                <td
                                className="
                                text-center text-dark
                                font-medium
                                text-base
                                py-5
                                px-2
                                bg-white
                                border-b border-[#E8E8E8]
                                "
                                >
                                {data.first_name}
                                </td>
                                <td
                                className="
                                text-center text-dark
                                font-medium
                                text-base
                                py-5
                                px-2
                                bg-[#F3F6FF]
                                border-b border-[#E8E8E8]
                                "
                                >
                                {data.last_name}
                                </td>
                            </tr>
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default UsersTable



