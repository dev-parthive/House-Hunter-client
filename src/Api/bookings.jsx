// Get all bookings for a user by email
export const getBookings = async email => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/bookings?email=${email}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
      }
    )
    const bookings = await response.json()
    return bookings
  }

  //save a bookings in our databasae 
export const saveBookings = async (bookingData) => {
  try {
      const url = `${process.env.REACT_APP_API_URL}/bookings`
      const response = await fetch(url, {
          method: "POST",
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(bookingData)
      })
      const result = await response.json()
      if (result) {
          toast.success("Booking successfull")
      }
      return result;

  }
  catch (err) {
      toast.error(err.message)
  }
}

  
  // Get All bookings for admin
  export const getAllBookings = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
      },
    })
    const bookings = await response.json()
    return bookings
  }
  
  // Delete a booking
  export const deleteBooking = async id => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/${id}`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
      }
    )
  
    const data = await response.json()
    return data
  }
  
  // Create Payment Intent
  
  export const getPaymentIntent = async price => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/create-payment-intent`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
        body: JSON.stringify({ price }),
      }
    )
  
    const data = await response.json()
    return data
  }
  