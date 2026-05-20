// server/api/reviews.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const placeId = config.public.googlePlaceId
  const apiKey = config.public.googleMapsApiKey

  const url = `https://places.googleapis.com/v1/places/${placeId}`

  try {
    const response: any = await $fetch(url, {
      method: 'GET',
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews,userRatingCount'
      }
    })

    return {
      reviews: response?.reviews || [],
      user_ratings_total: response?.userRatingCount || 25
    }
  } catch (error: any) {
    // TEMPORARY FIX: Expose the absolute truth of the failure right on screen
    return { 
      error: true,
      message: error.message,
      statusCode: error.statusCode,
      data: error.data
    }
  }
})