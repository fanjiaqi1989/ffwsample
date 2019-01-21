
export namespace pb {

    interface IPerson {
        name: string;
        address: string;
        phone_number: string;
        age: number;
        location?: (pb.ISC_Location|null);
    }

    class Person implements IPerson {
        constructor(properties?: pb.IPerson);
        public name: string;
        public address: string;
        public phone_number: string;
        public age: number;
        public location?: (pb.ISC_Location|null);
        public static create(properties?: pb.IPerson): pb.Person;
        public static encode(message: pb.IPerson, writer?: protobuf.Writer): protobuf.Writer;
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): pb.Person;
    }

    interface ISC_Location {
        region: string;
        country: string;
    }

    class SC_Location implements ISC_Location {
        constructor(properties?: pb.ISC_Location);
        public region: string;
        public country: string;
        public static create(properties?: pb.ISC_Location): pb.SC_Location;
        public static encode(message: pb.ISC_Location, writer?: protobuf.Writer): protobuf.Writer;
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): pb.SC_Location;
    }
}
