## API Report File for "daf-core"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { DIDDocument } from 'did-resolver';
import { Verifiable } from 'did-jwt-vc';
import { W3CCredential } from 'did-jwt-vc';
import { W3CPresentation } from 'did-jwt-vc';

// @public
export class Agent implements IAgent {
    constructor(options?: IAgentOptions);
    availableMethods(): string[];
    execute<P = any, R = any>(method: string, args: P): Promise<R>;
    readonly methods: IPluginMethodMap;
    }

// @public
export function createAgent<T extends IPluginMethodMap>(options: IAgentOptions): TAgent<T>;

export { DIDDocument }

// @public
export interface IAgent extends IAgentBase {
    // (undocumented)
    execute: <A = any, R = any>(method: string, args: A) => Promise<R>;
}

// @public
export interface IAgentBase {
    // (undocumented)
    availableMethods: () => string[];
}

// @public
export interface IAgentContext<T extends IPluginMethodMap> {
    agent: TAgent<T>;
}

// @public
export interface IAgentOptions {
    authorizedMethods?: string[];
    context?: Record<string, any>;
    overrides?: IPluginMethodMap;
    plugins?: IAgentPlugin[];
}

// @public
export interface IAgentPlugin {
    // (undocumented)
    readonly methods: IPluginMethodMap;
    // (undocumented)
    readonly schema?: IAgentPluginSchema;
}

// @public
export interface IAgentPluginSchema {
    // (undocumented)
    components: {
        schemas: any;
        methods: any;
    };
}

// @public
export interface IDataStore extends IPluginMethodMap {
    dataStoreGetMessage(args: IDataStoreGetMessageArgs): Promise<IMessage>;
    dataStoreGetVerifiableCredential(args: IDataStoreGetVerifiableCredentialArgs): Promise<VerifiableCredential>;
    dataStoreGetVerifiablePresentation(args: IDataStoreGetVerifiablePresentationArgs): Promise<VerifiablePresentation>;
    dataStoreSaveMessage(args: IDataStoreSaveMessageArgs): Promise<string>;
    dataStoreSaveVerifiableCredential(args: IDataStoreSaveVerifiableCredentialArgs): Promise<string>;
    dataStoreSaveVerifiablePresentation(args: IDataStoreSaveVerifiablePresentationArgs): Promise<string>;
}

// @public
export interface IDataStoreGetMessageArgs {
    id: string;
}

// @public
export interface IDataStoreGetVerifiableCredentialArgs {
    hash: string;
}

// @public
export interface IDataStoreGetVerifiablePresentationArgs {
    hash: string;
}

// @public
export interface IDataStoreSaveMessageArgs {
    message: IMessage;
}

// @public
export interface IDataStoreSaveVerifiableCredentialArgs {
    verifiableCredential: VerifiableCredential;
}

// @public
export interface IDataStoreSaveVerifiablePresentationArgs {
    verifiablePresentation: VerifiablePresentation;
}

// @public
export interface IHandleMessageArgs {
    metaData?: IMetaData[];
    raw: string;
    save?: boolean;
}

// @public
export interface IIdentity {
    alias?: string;
    controllerKeyId: string;
    did: string;
    keys: IKey[];
    provider: string;
    services: IService[];
}

// @public
export interface IIdentityManager extends IPluginMethodMap {
    identityManagerAddKey(args: IIdentityManagerAddKeyArgs, context: IAgentContext<IKeyManager>): Promise<any>;
    identityManagerAddService(args: IIdentityManagerAddServiceArgs, context: IAgentContext<IKeyManager>): Promise<any>;
    identityManagerCreateIdentity(args: IIdentityManagerCreateIdentityArgs, context: IAgentContext<IKeyManager>): Promise<IIdentity>;
    identityManagerDeleteIdentity(args: IIdentityManagerDeleteIdentityArgs, context: IAgentContext<IKeyManager>): Promise<boolean>;
    identityManagerGetIdentities(args: IIdentityManagerGetIdentitiesArgs): Promise<Array<IIdentity>>;
    identityManagerGetIdentity(args: IIdentityManagerGetIdentityArgs): Promise<IIdentity>;
    identityManagerGetIdentityByAlias(args: IIdentityManagerGetIdentityByAliasArgs): Promise<IIdentity>;
    identityManagerGetOrCreateIdentity(args: IIdentityManagerGetOrCreateIdentityArgs, context: IAgentContext<IKeyManager>): Promise<IIdentity>;
    identityManagerGetProviders(): Promise<Array<string>>;
    identityManagerImportIdentity(args: IIdentity, context: IAgentContext<IKeyManager>): Promise<IIdentity>;
    identityManagerRemoveKey(args: IIdentityManagerRemoveKeyArgs, context: IAgentContext<IKeyManager>): Promise<any>;
    identityManagerRemoveService(args: IIdentityManagerRemoveServiceArgs, context: IAgentContext<IKeyManager>): Promise<any>;
    identityManagerSetAlias(args: IIdentityManagerSetAliasArgs, context: IAgentContext<IKeyManager>): Promise<boolean>;
}

// @public
export interface IIdentityManagerAddKeyArgs {
    did: string;
    key: IKey;
    options?: object;
}

// @public
export interface IIdentityManagerAddServiceArgs {
    did: string;
    options?: object;
    service: IService;
}

// @public
export interface IIdentityManagerCreateIdentityArgs {
    alias?: string;
    kms?: string;
    options?: object;
    provider?: string;
}

// @public
export interface IIdentityManagerDeleteIdentityArgs {
    did: string;
}

// @public
export interface IIdentityManagerGetIdentitiesArgs {
    alias?: string;
    provider?: string;
}

// @public
export interface IIdentityManagerGetIdentityArgs {
    did: string;
}

// @public
export interface IIdentityManagerGetIdentityByAliasArgs {
    alias: string;
    provider?: string;
}

// @public
export interface IIdentityManagerGetOrCreateIdentityArgs {
    alias: string;
    kms?: string;
    options?: object;
    provider?: string;
}

// @public
export interface IIdentityManagerRemoveKeyArgs {
    did: string;
    kid: string;
    options?: object;
}

// @public
export interface IIdentityManagerRemoveServiceArgs {
    did: string;
    id: string;
    options?: object;
}

// @public
export interface IIdentityManagerSetAliasArgs {
    alias: string;
    did: string;
}

// @public
export interface IKey {
    kid: string;
    kms: string;
    meta?: object;
    privateKeyHex?: string;
    publicKeyHex: string;
    type: TKeyType;
}

// @public
export interface IKeyManager extends IPluginMethodMap {
    keyManagerCreateKey(args: IKeyManagerCreateKeyArgs): Promise<IKey>;
    // @beta
    keyManagerDecryptJWE(args: IKeyManagerDecryptJWEArgs): Promise<string>;
    keyManagerDeleteKey(args: IKeyManagerDeleteKeyArgs): Promise<boolean>;
    // @beta
    keyManagerEncryptJWE(args: IKeyManagerEncryptJWEArgs): Promise<string>;
    keyManagerGetKey(args: IKeyManagerGetKeyArgs): Promise<IKey>;
    keyManagerGetKeyManagementSystems(): Promise<Array<string>>;
    keyManagerImportKey(args: IKey): Promise<boolean>;
    keyManagerSignEthTX(args: IKeyManagerSignEthTXArgs): Promise<string>;
    keyManagerSignJWT(args: IKeyManagerSignJWTArgs): Promise<string>;
}

// @public
export interface IKeyManagerCreateKeyArgs {
    kms: string;
    meta?: object;
    type: TKeyType;
}

// @beta
export interface IKeyManagerDecryptJWEArgs {
    data: string;
    kid: string;
}

// @public
export interface IKeyManagerDeleteKeyArgs {
    kid: string;
}

// @beta
export interface IKeyManagerEncryptJWEArgs {
    data: string;
    kid: string;
    to: Omit<IKey, 'kms'>;
}

// @public
export interface IKeyManagerGetKeyArgs {
    kid: string;
}

// @public
export interface IKeyManagerSignEthTXArgs {
    kid: string;
    transaction: object;
}

// @public
export interface IKeyManagerSignJWTArgs {
    data: string;
    kid: string;
}

// @public
export interface IMessage {
    createdAt?: string;
    credentials?: VerifiableCredential[];
    data?: string | object;
    expiresAt?: string;
    from?: string;
    id: string;
    metaData?: IMetaData[];
    presentations?: VerifiablePresentation[];
    raw?: string;
    replyTo?: string[];
    replyUrl?: string;
    threadId?: string;
    to?: string;
    type: string;
}

// @public
export interface IMessageHandler extends IPluginMethodMap {
    handleMessage(args: IHandleMessageArgs, context: IAgentContext<IDataStore>): Promise<IMessage>;
}

// @public
export interface IMetaData {
    type: string;
    value?: string;
}

// @public
export interface IPluginMethod {
    // (undocumented)
    (args: any, context: any): Promise<any>;
}

// @public
export interface IPluginMethodMap extends Record<string, IPluginMethod> {
}

// @public
export interface IResolver extends IPluginMethodMap {
    resolveDid(args: ResolveDidArgs): Promise<DIDDocument>;
}

// @public
export interface IService {
    description?: string;
    id: string;
    serviceEndpoint: string;
    type: string;
}

// @public
export interface RemoveContext<T extends IPluginMethod> {
    // (undocumented)
    (args?: Parameters<T>[0] | undefined): ReturnType<T>;
}

// @public
export interface ResolveDidArgs {
    didUrl: string;
}

// @public
export type TAgent<T extends IPluginMethodMap> = {
    [P in keyof T]: RemoveContext<T[P]>;
} & IAgent;

// @public
export type TKeyType = 'Ed25519' | 'Secp256k1';

// @public (undocumented)
export const validate: (args: object, schema: object, schemaPath?: string | undefined) => void;

// @public (undocumented)
export class ValidationError extends Error {
    constructor(message: string, code: string, path: string, description: string);
    // (undocumented)
    code: string;
    // (undocumented)
    description: string;
    // (undocumented)
    message: string;
    // (undocumented)
    path: string;
}

// @public
export type VerifiableCredential = Verifiable<W3CCredential>;

// @public
export type VerifiablePresentation = Verifiable<W3CPresentation>;

export { W3CCredential }

export { W3CPresentation }


```