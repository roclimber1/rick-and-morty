


import React from 'react'





const useRequestProcessor = ({ requestData, parameters }) => {

    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState(null)



    const loadData = async (parameters) => {

        setLoading(true)

        try {
            const { data } = await requestData(parameters)

            setData(data)

        } finally {

            setLoading(false)
        }
    }


    React.useEffect(() => {

        !loading && loadData(parameters)

    }, [parameters])


    return {
        loading,
        data
    }
}



export default useRequestProcessor
