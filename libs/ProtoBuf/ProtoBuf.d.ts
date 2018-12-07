

declare module ProtoBuf {
    export function loadProtoFile(filePath: string):any;
    export function loadProto(proto:string):any;
    
}
/**
*调用外部js解析pb数据
*/
declare class ByteBuffer{
            
    constructor(capacity?: number,littleEndian?:boolean,noAssert?:boolean);
            
    public buffer: ArrayBuffer;
    
    public view: any;
            
    /**完全可读写  offset 位移
    * Absolute read/write offset.
    * @type {number}
    * @expose
    * @see ByteBuffer#flip
    * @see ByteBuffer#clear
    */
    public offset: number;
    
    /**设置缓冲区大小限制
    * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
    * @type {number}
    * @expose
    * @see ByteBuffer#flip
    * @see ByteBuffer#clear
    */
    public limit: number;
            
    /**合并多个ByteBuffers
    * Concatenates multiple ByteBuffers into one.
    * @param {!Array.<!ByteBuffer|!ArrayBuffer|!Uint8Array|string>} buffers Buffers to concatenate
    * @param {(string|boolean)=} encoding String encoding if `buffers` contains a string ("base64", "hex", "binary",
    *  defaults to "utf8")
    * @param {boolean=} littleEndian Whether to use little or big endian byte order for the resulting ByteBuffer. Defaults
    *  to {@link ByteBuffer.DEFAULT_ENDIAN}.
    * @param {boolean=} noAssert Whether to skip assertions of offsets and values for the resulting ByteBuffer. Defaults to
    *  {@link ByteBuffer.DEFAULT_NOASSERT}.
    * @returns {!ByteBuffer} Concatenated ByteBuffer
    * @expose
    */
    concat(buffers,encoding,littleEndian,noAssert): any;
            
    /**读取指定数量的字节数
    * Reads the specified number of bytes.
    * @param {number} length Number of bytes to read
    * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
    * @returns {!ByteBuffer}
    * @expose
    */
    readBytes(length,offset):any;
            
    /**写一个有效载荷的字节数
    * Writes a payload of bytes. This is an alias of {link ByteBuffer#append}.
    * @function
    * @params {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to write. If `source` is a ByteBuffer, its offsets
    *  will be modified according to the performed read operation.
    * @params {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
    * @params {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
    *  written if omitted.
    * @returns {!ByteBuffer} this
    * @expose
    */
    writeBytes(source,encoding?,offset?): any;
            
    /**这个ByteBuffer附加一些数据。这些附加数据将覆盖offset之后的数据。
    * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended
    *  data's length.
    * @params {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to append. If `source` is a ByteBuffer, its offsets
    *  will be modified according to the performed read operation.
    * @params {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
    * @params {number=} offset Offset to append at. Will use and increase {@link ByteBuffer#offset} by the number of bytes
    *  written if omitted.
    * @returns {!ByteBuffer} this
    * @expose
    * @example A relative `<01 02>03.append(<04 05>)` will result in `<01 02 04 05>, 04 05|`
    * @example An absolute `<01 02>03.append(04 05>, 1)` will result in `<01 04>05, 04 05|`
    */
    append(source,encoding?,offset?): any;
            
    /**写如一个32为带符号整型。 int32
    * Writes a 32bit signed integer. This is an alias of {@link ByteBuffer#writeInt32}.
    * @param {number} value Value to write
    * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
    * @expose
    */
    writeInt(value?:number,offset?:number): number;
            
    /**读入一个32为带符号整型。 int32
    * Reads a 32bit signed integer. This is an alias of {@link ByteBuffer#readInt32}.
    * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `4` if omitted.
    * @returns {number} Value read
    * @expose
    */
    readInt(offset?:number): number;
    
    /**
    * Reads an UTF8 encoded string.
    * @params number length Number of characters or bytes to read.
    * @params string= metrics Metrics specifying what `length` is meant to count. Defaults to
    *  {link ByteBuffer.METRICS_CHARS}.
    * @params number= offset Offset to read from. Will use and increase {link ByteBuffer#offset} by the number of bytes
    *  read if omitted.
    * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
    *  read and the actual number of bytes read.
    */
    readString(length:number, metrics?:any, offset?:number):string;
            
    /**获取当前ByteBuffer的长度
    * Gets the capacity of this ByteBuffer's backing buffer.
    * @returns {number} Capacity of the backing buffer
    * @expose
    */
    capacity(): number;
            
    /**设置字节序列 是否是小头
    * Sets the byte order.
    * @param {boolean} littleEndian `true` for little endian byte order, `false` for big endian
    * @returns {!ByteBuffer} this
    * @expose
    */
    order(littleEndian:boolean):any;
}