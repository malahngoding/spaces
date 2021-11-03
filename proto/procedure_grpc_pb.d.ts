// package: 
// file: procedure.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as procedure_pb from "./procedure_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    sayHelloAgain: IGreeterService_ISayHelloAgain;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<procedure_pb.HelloRequest, procedure_pb.HelloReply> {
    path: "/Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<procedure_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<procedure_pb.HelloRequest>;
    responseSerialize: grpc.serialize<procedure_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<procedure_pb.HelloReply>;
}
interface IGreeterService_ISayHelloAgain extends grpc.MethodDefinition<procedure_pb.HelloRequest, procedure_pb.HelloReply> {
    path: "/Greeter/SayHelloAgain";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<procedure_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<procedure_pb.HelloRequest>;
    responseSerialize: grpc.serialize<procedure_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<procedure_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<procedure_pb.HelloRequest, procedure_pb.HelloReply>;
    sayHelloAgain: grpc.handleUnaryCall<procedure_pb.HelloRequest, procedure_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: procedure_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: procedure_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: procedure_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAgain(request: procedure_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAgain(request: procedure_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAgain(request: procedure_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: procedure_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: procedure_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: procedure_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAgain(request: procedure_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAgain(request: procedure_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAgain(request: procedure_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: procedure_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
