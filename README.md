# Lab-6-Boilerplate
Starter Files for lab 6

# READ ME FOR UNDERSTANDING OF ENDPOINTS

## User
Description: after authenticating with GOOGLE then you are able to get the user credentials from this endpoint

Path:
'/api/v1/user" {GET}

Response Body JSON Example:

```JSON
{
    "Id":"aa91fdac-35a7-4d43-a1c1-1cea24bac79b",
    "UserName":"tkabbott97@gmail.com",
    "NormalizedUserName":"TKABBOTT97@GMAIL.COM",
    "Email":"tkabbott97@gmail.com",
    "NormalizedEmail":"TKABBOTT97@GMAIL.COM",
    "EmailConfirmed":true,"PasswordHash":null,
    "SecurityStamp":"FUL3UZC2C425LMOS3EZ22ZERJBMLOFTL",
    "ConcurrencyStamp":"9dcbb47f-f513-4601-abc0-9f99cc0d6cf3",
    "PhoneNumber":null,
    "PhoneNumberConfirmed":false,
    "TwoFactorEnabled":false,
    "LockoutEnd":null,
    "LockoutEnabled":true,
    "AccessFailedCount":0
}
```


## Create

Description: This is a post call to create a task in the mongo database. 

Path:
'/api/v1/user' {POST}


Request Body JSON Example:

```JSON
{
    "UserId":"aa91fdac-35a7-4d43-a1c1-1cea24bac79b",
    "Text":"whatever", 
    "Date":"2020-01-27T00:00:00:0000Z",
    "Done":"false"
}
```
Response Body JSON Example:
```JSON
{
    "UserId":"aa91fdac-35a7-4d43-a1c1-1cea24bac79b",
    "Text":"whatever", 
    "Date":"2020-01-27T00:00:00:0000Z",
    "Done":"false"
}
```

## Read all tasks 

Description: This is the endpoint to get all the tasks in the database. It is a GET request.

Path:

'/api/v1/tasks/ {GET}

Parameter table Not available


Response Body JSON Example:

```JSON
{
    "UserId":"aa91fdac-35a7-4d43-a1c1-1cea24bac79b",
    "Text":"whatever", 
    "Date":"2020-01-27T00:00:00:0000Z",
    "Done":"false"
}
{
    "UserId":"aa91fdac-35a7-4d43-a1c1-1cea24bac79b",
    "Text":"whatever", 
    "Date":"2020-01-27T00:00:00:0000Z",
    "Done":"false"
}
{
    "UserId":"aa91fdac-35a7-4d43-a1c1-1cea24bac79b",
    "Text":"whatever", 
    "Date":"2020-01-27T00:00:00:0000Z",
    "Done":"false"
}

```

## Read Individual Task

Description: Returns one specific task dependent on the ID that is past in the param of the request. 

Path:
'/api/v1/tasks/:id {GET}'

|Parameter | Description          |
|----------|----------------------|
|ID        |the ID to get the task|


Responce Body Example JSON

```JSON
{
    "_id":"lZK0L6FtP3oyAcWaIMVNEG79kJaGcPaM", 
    "UserId":"aa91fdac-35a7-4d43-a1c1-1cea24bac79b",
    "Text":"whatever", 
    "Date":"2020-01-27T00:00:00:0000Z",
    "Done":"false"
}

```

## Update

Description: Updates a specifc tasks DONE variable in the database from false to true or from true to false. 

Path:

'/api/v1/tasks/:id {PUT}

|Parameter | Description             |
|----------|-------------------------|
|ID        |The task ID to be updated|

Request Body Example JSON:

```JSON
{
    "Done":"true"
}
```

## Delete

Description: Deletes a task from the database with a specific ID. 

Path:
'/api/v1/tasks/:id {DELETE}'

|Parameter | Description             |
|----------|-------------------------|
|ID        |The task ID to be Deleted|

Response Body Example JSON: 
```JSON
{
     "n": 1,
    "opTime": {
        "ts": "6901506673618190338",
        "t": 4
    },
    "electionId": "7fffffff0000000000000004",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6901506673618190338",
        "signature": {
            "hash": "7CI0jehvdSvGaFUvZI9zJiu2waQ=",
            "keyId": "6887475127131308035"
        }
    },
    "operationTime": "6901506673618190338",
    "deletedCount": 1
    }
```