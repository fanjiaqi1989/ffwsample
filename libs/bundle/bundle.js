/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.pb = (function() {
    
        /**
         * Namespace pb.
         * @exports pb
         * @namespace
         */
        var pb = {};
    
        pb.Person = (function() {
    
            /**
             * Properties of a Person.
             * @memberof pb
             * @interface IPerson
             * @property {string} name Person name
             * @property {string} address Person address
             * @property {string} phone_number Person phone_number
             * @property {number} age Person age
             * @property {pb.ISC_Location|null} [location] Person location
             */
    
            /**
             * Constructs a new Person.
             * @memberof pb
             * @classdesc Represents a Person.
             * @implements IPerson
             * @constructor
             * @param {pb.IPerson=} [properties] Properties to set
             */
            function Person(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Person name.
             * @member {string} name
             * @memberof pb.Person
             * @instance
             */
            Person.prototype.name = "";
    
            /**
             * Person address.
             * @member {string} address
             * @memberof pb.Person
             * @instance
             */
            Person.prototype.address = "";
    
            /**
             * Person phone_number.
             * @member {string} phone_number
             * @memberof pb.Person
             * @instance
             */
            Person.prototype.phone_number = "";
    
            /**
             * Person age.
             * @member {number} age
             * @memberof pb.Person
             * @instance
             */
            Person.prototype.age = 0;
    
            /**
             * Person location.
             * @member {pb.ISC_Location|null|undefined} location
             * @memberof pb.Person
             * @instance
             */
            Person.prototype.location = null;
    
            /**
             * Creates a new Person instance using the specified properties.
             * @function create
             * @memberof pb.Person
             * @static
             * @param {pb.IPerson=} [properties] Properties to set
             * @returns {pb.Person} Person instance
             */
            Person.create = function create(properties) {
                return new Person(properties);
            };
    
            /**
             * Encodes the specified Person message. Does not implicitly {@link pb.Person.verify|verify} messages.
             * @function encode
             * @memberof pb.Person
             * @static
             * @param {pb.IPerson} message Person message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Person.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.address);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.phone_number);
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.age);
                if (message.location != null && message.hasOwnProperty("location"))
                    $root.pb.SC_Location.encode(message.location, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };
    
            /**
             * Decodes a Person message from the specified reader or buffer.
             * @function decode
             * @memberof pb.Person
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pb.Person} Person
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Person.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Person();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.address = reader.string();
                        break;
                    case 3:
                        message.phone_number = reader.string();
                        break;
                    case 4:
                        message.age = reader.int32();
                        break;
                    case 5:
                        message.location = $root.pb.SC_Location.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("address"))
                    throw $util.ProtocolError("missing required 'address'", { instance: message });
                if (!message.hasOwnProperty("phone_number"))
                    throw $util.ProtocolError("missing required 'phone_number'", { instance: message });
                if (!message.hasOwnProperty("age"))
                    throw $util.ProtocolError("missing required 'age'", { instance: message });
                return message;
            };
    
            return Person;
        })();
    
        pb.SC_Location = (function() {
    
            /**
             * Properties of a SC_Location.
             * @memberof pb
             * @interface ISC_Location
             * @property {string} region SC_Location region
             * @property {string} country SC_Location country
             */
    
            /**
             * Constructs a new SC_Location.
             * @memberof pb
             * @classdesc Represents a SC_Location.
             * @implements ISC_Location
             * @constructor
             * @param {pb.ISC_Location=} [properties] Properties to set
             */
            function SC_Location(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_Location region.
             * @member {string} region
             * @memberof pb.SC_Location
             * @instance
             */
            SC_Location.prototype.region = "";
    
            /**
             * SC_Location country.
             * @member {string} country
             * @memberof pb.SC_Location
             * @instance
             */
            SC_Location.prototype.country = "";
    
            /**
             * Creates a new SC_Location instance using the specified properties.
             * @function create
             * @memberof pb.SC_Location
             * @static
             * @param {pb.ISC_Location=} [properties] Properties to set
             * @returns {pb.SC_Location} SC_Location instance
             */
            SC_Location.create = function create(properties) {
                return new SC_Location(properties);
            };
    
            /**
             * Encodes the specified SC_Location message. Does not implicitly {@link pb.SC_Location.verify|verify} messages.
             * @function encode
             * @memberof pb.SC_Location
             * @static
             * @param {pb.ISC_Location} message SC_Location message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_Location.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.region);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.country);
                return writer;
            };
    
            /**
             * Decodes a SC_Location message from the specified reader or buffer.
             * @function decode
             * @memberof pb.SC_Location
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pb.SC_Location} SC_Location
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_Location.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SC_Location();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.region = reader.string();
                        break;
                    case 2:
                        message.country = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("region"))
                    throw $util.ProtocolError("missing required 'region'", { instance: message });
                if (!message.hasOwnProperty("country"))
                    throw $util.ProtocolError("missing required 'country'", { instance: message });
                return message;
            };
    
            return SC_Location;
        })();
    
        return pb;
    })();

    return $root;
})(protobuf);
