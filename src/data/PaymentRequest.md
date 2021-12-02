# Payment Request

| Name            | Type      | Required? | Comment                                                            |
| --------------- | --------- | --------- | ------------------------------------------------------------------ |
| meta            | object    | Yes       | See "meta" below                                                   |
| recipient       | object    | Yes       | See "recipient" below                                              |
| amount          | string    | Yes       | Amount (in base currency)                                          |
| currency        | string    | Yes       | Currency code                                                      |
| payer           | object    | No        | See "payer" below                                                  |
| note            | string    | No        | Note about the payment                                             |
| reference       | string    | No        | Reference of payment request in origin application/client          |
| dueDate         | datetime  | No        | Due date for the payment                                           |
| createdAt       | datetime  | No        | Creation date/time of the payment request                          |
| creator         | object    | Yes       | See "creator" below                                                |
| signature       | string    | Yes       | EIP712 signature of the payment request data by the creator        |


## meta

_Metadata about the document and it's format_

| Name      | Type     | Required? | Comment                                                                         |
| --------- | -------- | --------- | ------------------------------------------------------------------------------- |
| origin    | string   | Yes       | Origin application/client e.g "grindery"                                        |
| format    | string   | Yes       | Always "payment_request"                                                        |
| version   | string   | Yes       | Version of the document format used. Only "0.0.1" at the moment                 |
| updateOf  | string   | Yes       | ID/Hash of the document/record that this record/document replaces/supersedes    |


## recipient

_Data about the recipient_

| Name                | Type                     | Required?  | Comment                                              |
| ------------------- | ------------------------ | ---------- | ---------------------------------------------------- |
| address             | string                   | Yes        | Wallet address                                       |
| email               | string                   | No         | Email                                                |
| name                | string                   | No         | Name                                                 |
| reference           | string                   | No         | Reference of recipient in origin application/client  |


## payer

_Data about the payer_

| Name                | Type                     | Required? | Comment                                               |
| ------------------- | ------------------------ | --------- | ----------------------------------------------------- |
| address             | string                   | No        | Wallet address                                        |
| email               | string                   | No        | Email                                                 |
| name                | string                   | No        | Name                                                  |
| reference           | string                   | No        | Reference of payer in origin application/client       |


## creator

_Data about the creator_

| Name                | Type                     | Required? | Comment                                               |
| ------------------- | ------------------------ | --------- | ----------------------------------------------------- |
| address             | string                   | Yes       | Wallet address                                        |
| email               | string                   | No        | Email                                                 |
| name                | string                   | No        | Name                                                  |
| reference           | string                   | No        | Reference of creator in origin application/client     |
