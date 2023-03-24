
import React from 'react'




interface UseRequestProcessorParameters<Data, Parameters> {
    requestData: (parameters: Parameters) => Promise<{ data: Data }>,
    parameters: Parameters
}


interface UseRequestProcessorResults<Data> {
    loading: boolean,
    data: Data | null
}



function useRequestProcessor<Data, Parameters>({ requestData, parameters }: UseRequestProcessorParameters<Data, Parameters>): UseRequestProcessorResults<Data> {

    const [loading, setLoading] = React.useState<boolean>(false)
    const [data, setData] = React.useState<Data | null>(null)


    const loadData = async (parameters: Parameters) => {

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
