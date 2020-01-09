import axios from 'axios'
const url =
  "https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&facet=cityoflastcontact&facet=countydisplaynameoflastcontact&facet=raceethnicity&facet=statedisplaynameoflastcontact&facet=gender";
const getMissings = () =>
  axios
    .get(url)
    .then(res => {
        const records = res.data.records.map(missing => {
          const {
            firstname,
            middlename,
            lastname,
            currentagefrom,
            gender,
            dateoflastcontact,
            countydisplaynameoflastcontact,
            link
          } = missing.fields;
          const {recordid} = missing 
          return {
            name: `${firstname} ${middlename} ${lastname}`,
            recordid: recordid,
            gender: gender,
            dateoflastcontact: dateoflastcontact,
            currentagefrom: currentagefrom,
            countydisplaynameoflastcontact: countydisplaynameoflastcontact,
            link: link
          };
        });
        return records;
    })
    .catch(err => console.error(err));
  

export default getMissings