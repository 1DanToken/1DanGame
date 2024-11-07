// userService.js
import config from '../config.js';

export async function fetchUserDetails(address) {
  try {
    const response = await fetch(`${config.apiUrl}/users/${address}`, {
      method: "GET",
      headers: {
        "X-API-Key": `${config.apiKey}`, 
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch user details');
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
}
