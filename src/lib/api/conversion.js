import apiClientRequest from "@/lib/api"

export const getConversionCache = async (from, to) => {
  const { data } = await apiClientRequest.get(`/conversion/cache`, {
    params: {
      from, 
      to
    }
  })
  return data
}
