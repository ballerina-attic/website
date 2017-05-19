This is the MSF4J service which is responsible of executing the user define ballerina programs received from ballerinalang website.

____________
How It Works
____________

1. When the MSF4J service get start it will extract the embedded Ballerina distribution to a temp location
2. When user sends a request, payload will be written to a temp file.
3. MSF4J service will execute ballerina run main <temp-file-path> as a separate java process.
4. Read the process output and send ot back as the response.
5. If the process takes more that 8 seconds to get execute, process will be killed.
