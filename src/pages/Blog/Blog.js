import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between SQL and NoSQL? </h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>SQL databases are primarily called RDBMS or Relational databases.</td>
                                    <td>NoSQL databases are primarily called as Non-relational or distributed database</td>
                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>Structured Query Language.</td>
                                    <td>No declarative Query Language.</td>
                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>SQL databases are table based databases.</td>
                                    <td>NoSQL databases can be document based, key-value pairs, graph databases.</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>SQL databases have a predefined schema.</td>
                                    <td>NoSQL databases use dynamic schema for unstructured data.</td>
                                </tr>

                                <tr>
                                    <th>5</th>
                                    <td>Oracle, Postgres, MySQL and MS-SQL.</td>
                                    <td>MongoDB, Redis, Neo4j, Hbase.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is JWT and how does it work? </h2>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. Once decoded, you will get two JSON strings: The header and the payload. The signature.
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact.The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. </p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and Node Js? </h2>
                    <p>1. NodeJS :
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                        <br />
                        2. JavaScript :
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does Node Js handel multiple requests at the same time? </h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;