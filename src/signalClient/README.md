# libSignal Client

## General Logic

Each user has:

* A long-term identity public key
* Signed prekey, which he will change periodically
* A set of one-time prekeys, which are each used in a single X3DH protocol run

X3DH has three phases:

* Bob publishes his identity key and prekeys to a server.
  * a set of elliptic curve public keys:
    * Bob's long-term public identity key
    * Bob's signed prekey
    * A set of Bob's one-time prekeys
* Alice fetches a "prekey bundle" from the server, and uses it to send an  
  initial message to Bob.
* Bob receives and processes Alice's initial message.

Each user uploads a new signed prekey and prekey signature at some interval 
(e.g. once a week, or once a month).

After uploading a new signed prekey, a user may keep the private key corresponding 
to the previous signed prekey around for some period of time, to handle messages 
using it that have been delayed in transit. Eventually, they should delete this 
private key for forward secrecy.

The one-time prekey private keys will be deleted as received messages using them.

### References

* [Signal's Developer Homepage](https://signal.org/docs/)
  * [The X3DH Key Agreement Protocol](https://signal.org/docs/specifications/x3dh)
  * [The Double Ratchet Algorithm](https://signal.org/docs/specifications/doubleratchet)
  * [The Signal Protocol](https://signal.org/docs/specifications/signal-protocol/)
  * [The Sesame Algorithm: Session Management for Asynchronous Message Encryption](https://signal.org/docs/specifications/sesame/)
* [Signal Community Forum](https://community.signalusers.org/)
* [End-to-end encrypted messages need more than libsignal](https://mjg59.dreamwidth.org/62598.html)
* [The signal-protocol for node and browsers](https://people.ischool.berkeley.edu/~nick/signal-protocol-js/)
  * Uses [Emscripten](https://github.com/kripken/emscripten) - compiles LLVM bytecode to performant Javascript
  * Uses WebWorker and [webworkify](https://github.com/substack/webworkify) and [tiny-worker](https://www.npmjs.com/package/tiny-worker)
  * Uses [node-webcrypto-ossl](https://github.com/PeculiarVentures/node-webcrypto-ossl)
  * [libsignal-service-javascript](https://github.com/throneless-tech/libsignal-service-javascript)

### Glossary

* **Prekey**: published to the server prior to beginning the protocol run
