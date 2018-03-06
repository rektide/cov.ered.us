import client from "/lib/braintree-web/client/client.js"
import paymentRequest from "/lib/braintree-web/payment-request/external/payment-request.js"
import promisify from "/js/promisify.js"

export let client= promisify( client.create, client)
export let paymentRequest= promisify( paymentRequest.create, paymentRequest)
