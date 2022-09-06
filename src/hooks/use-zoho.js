import axios from 'axios'

const ZOHO_URL =
  'https://2yg72ca9t8.execute-api.us-east-1.amazonaws.com/default/zoho_bigin_form'

export async function createContact(data) {
  return axios.post(
    ZOHO_URL,
    {
      data: {
        user_id: 'user_WfhlxOcGBIkazUV2ngHaw',
        service_id: 'service_nacho',
        template_id: 'contact_form',
        template_params: { ...data },
      },
      module: 'Contacts',
      trigger: ['approval', 'workflow'],
    },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )
}

export async function createCompany(data) {
  return axios.post(
    ZOHO_URL,
    {
      data: {
        user_id: 'user_WfhlxOcGBIkazUV2ngHaw',
        service_id: 'service_nacho',
        template_id: 'contact_form',
        template_params: { ...data },
      },
      module: 'Accounts',
      trigger: ['approval', 'workflow'],
    },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )
}

export async function createDeal(data) {
  axios.post(
    ZOHO_URL,
    {
      data: {
        user_id: 'user_WfhlxOcGBIkazUV2ngHaw',
        service_id: 'service_nacho',
        template_id: 'contact_form',
        template_params: { ...data },
      },
      module: 'Deals',
      trigger: ['approval', 'workflow'],
    },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )
}

export async function sendEmail(data, cb) {
  axios
    .post('https://api.emailjs.com/api/v1.0/email/send', {
      user_id: 'user_WfhlxOcGBIkazUV2ngHaw',
      service_id: 'service_nacho',
      template_id: 'contact_form',
      template_params: data,
    })
    .then(e => {
      return cb(e?.data)
    })
    .catch(({ response }) => cb(false))
}
