export async function updateUserPlaces(places)
{ 
  const response =  await fetch('http://localhost:3000/user-places',{
    method: 'PUT',
    body: JSON.stringify({places}),
    headers: {
        'Content-Type': 'application/json'
    }
    
   });

   if(!response.ok){
        return;
   }
}