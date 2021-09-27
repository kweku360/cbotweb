import { serverUrl } from "../utils/server";

export const allLogs = () => {
  const p = fetch(`${serverUrl()}/api/live/logs`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(async (response) => {
      const data = await response.json();
      // check for error response
      if (response.ok) {
        // console.log(data);
        return Promise.resolve(data.payload);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });

  return p;
};

// export const getProvider = (uid) => {
//   const p = fetch(`${serverUrl()}/api/serviceprovider/${uid}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then(async (response) => {
//       const data = await response.json();
//       // check for error response
//       if (response.ok) {
//         console.log(data);
//         return Promise.resolve(data.payload);
//       }
//     })
//     .catch((error) => {
//       console.error("There was an error!", error);
//     });

//   return p;
// };

// export const updateProvider = (uid, field, value) => {
//   const body = JSON.stringify({
//     uid: uid,
//     field: field,
//     value: value,
//   });
//   const p = fetch(`${serverUrl()}/api/serviceprovider/update`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: body,
//   })
//     .then(async (response) => {
//       const datares = await response.json();
//       // check for error response
//       if (response.ok) {
//         return Promise.resolve(datares);
//       }
//     })
//     .catch((error) => {
//       let err = { message: error };
//       return Promise.resolve(err);
//     });

//   return p;
// };

// export const addProviderImage = (uid, imageStr,providerid) => {
//   const body = JSON.stringify({
//     uid: uid,
//     imageStr: imageStr,
//     providerid: providerid,
//   });
//   const p = fetch(`${serverUrl()}/api/serviceprovider/image`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: body,
//   })
//     .then(async (response) => {
//       const datares = await response.json();
//       // check for error response
//       if (response.ok) {
//         return Promise.resolve(datares);
//       }
//     })
//     .catch((error) => {
//       let err = { message: error };
//       return Promise.resolve(err);
//     });

//   return p;
// };

// export const removeProviderImage = (uid) => {
//   const body = JSON.stringify({
//     uid: uid,
//   });
//   const p = fetch(`${serverUrl()}/api/serviceprovider/image/remove`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: body,
//   })
//     .then(async (response) => {
//       const datares = await response.json();
//       // check for error response
//       if (response.ok) {
//         return Promise.resolve(datares);
//       }
//     })
//     .catch((error) => {
//       let err = { message: error };
//       return Promise.resolve(err);
//     });

//   return p;
// };

// export const ProviderPaymentAccount = (providerid, network, name,number) => {
//   const body = JSON.stringify({
//     providerid: providerid,
//     network: network,
//     name: name,
//     number:number
//   });
//   const p = fetch(`${serverUrl()}/api/serviceprovider/accountsetup`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: body,
//   })
//     .then(async (response) => {
//       const datares = await response.json();
//       // check for error response
//       if (response.ok) {
//         return Promise.resolve(datares);
//       }
//     })
//     .catch((error) => {
//       let err = { message: error };
//       return Promise.resolve(err);
//     });

//   return p;
// };

// export const saveProvider = (data) => {
//   console.log(data);
//   const body = JSON.stringify({
//     driverid: data.driverid,
//     vehiclebrand: data.vehiclebrand,
//     email: data.email,
//     vehiclenumber: data.vehiclenumber,
//     providerunion: data.agentunion,
//     carrygopartner: data.carrygopartner,
//     service: data.service,
//     primarycontact: data.contact,
//     profileimg: "null",
//     location: data.location,
//     description: data.notes,
//     providerType:data.type,
//     nationalid: data.nationalid,
//     contactperson: data.fullname,
//     image: "null",
//   });
//   const p = fetch(`${serverUrl()}/api/serviceprovider/create`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: body,
//   })
//     .then(async (response) => {
//       const datares = await response.json();
//       // check for error response
//       if (response.ok) {
//         return Promise.resolve(datares);
//       }
//     })
//     .catch((error) => {
//       let err = { message: error };
//       return Promise.resolve(err);
//     });

//   return p;
// };
// export const searchProvider = (searchString) => {
//   const body = JSON.stringify({
//     search: searchString,
//   });
//   const p = fetch(`${serverUrl()}/api/serviceproviders/search`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: body,
//   })
//     .then(async (response) => {
//       const data = await response.json();
//       // check for error response
//       if (response.ok) {
//         return Promise.resolve(data.payload);
//       }
//     })
//     .catch((error) => {
//       console.error("There was an error!", error);
//     });

//   return p;
// };
