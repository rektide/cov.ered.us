import client from "/lib/braintree/client.js"
import paymentRequest from "/lib/braintree/payment-request.js"
import promisify from "/js/promisify.js"

export let client= promisify( client.create, client)
export let paymentRequest= promisify( paymentRequest.create, paymentRequest)
