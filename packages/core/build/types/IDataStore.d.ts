import { IPluginMethodMap } from './IAgent';
import { IMessage } from './IMessage';
import { VerifiableCredential, VerifiablePresentation } from './vc-data-model';
/**
 * Input arguments for {@link IDataStore.dataStoreSaveMessage | dataStoreSaveMessage}
 * @public
 */
export interface IDataStoreSaveMessageArgs {
    /**
     * Required. Message
     */
    message: IMessage;
}
/**
 * Input arguments for {@link IDataStore.dataStoreGetMessage | dataStoreGetMessage}
 * @public
 */
export interface IDataStoreGetMessageArgs {
    /**
     * Required. Message ID
     */
    id: string;
}
/**
 * Input arguments for {@link IDataStore.dataStoreSaveVerifiableCredential | dataStoreSaveVerifiableCredential}
 * @public
 */
export interface IDataStoreSaveVerifiableCredentialArgs {
    /**
     * Required. VerifiableCredential
     */
    verifiableCredential: VerifiableCredential;
}
/**
 * Input arguments for {@link IDataStore.dataStoreGetVerifiableCredential | dataStoreGetVerifiableCredential}
 * @public
 */
export interface IDataStoreGetVerifiableCredentialArgs {
    /**
     * Required. VerifiableCredential hash
     */
    hash: string;
}
/**
 * Input arguments for {@link IDataStoreDeleteVerifiableCredentialArgs | IDataStoreDeleteVerifiableCredentialArgs}
 * @public
 */
export interface IDataStoreDeleteVerifiableCredentialArgs {
    /**
     * Required. VerifiableCredential hash
     */
    hash: string;
}
/**
 * Input arguments for {@link IDataStore.dataStoreSaveVerifiablePresentation | dataStoreSaveVerifiablePresentation}
 * @public
 */
export interface IDataStoreSaveVerifiablePresentationArgs {
    /**
     * Required. VerifiablePresentation
     */
    verifiablePresentation: VerifiablePresentation;
}
/**
 * Input arguments for {@link IDataStore.dataStoreGetVerifiablePresentation | dataStoreGetVerifiablePresentation}
 * @public
 */
export interface IDataStoreGetVerifiablePresentationArgs {
    /**
     * Required. VerifiablePresentation hash
     */
    hash: string;
}
/**
 * Basic data store interface
 * @public
 */
export interface IDataStore extends IPluginMethodMap {
    /**
     * Saves message to the data store
     * @param args - message
     * @returns a promise that resolves to the id of the message
     */
    dataStoreSaveMessage(args: IDataStoreSaveMessageArgs): Promise<string>;
    /**
     * Gets message from the data store
     * @param args - arguments for getting message
     * @returns a promise that resolves to the message
     */
    dataStoreGetMessage(args: IDataStoreGetMessageArgs): Promise<IMessage>;
    /**
     * Saves verifiable credential to the data store
     * @param args - verifiable credential
     * @returns a promise that resolves to the hash of the VerifiableCredential
     */
    dataStoreSaveVerifiableCredential(args: IDataStoreSaveVerifiableCredentialArgs): Promise<string>;
    /**
     * Deletes verifiable credential from the data store
     * @param args - verifiable credential
     * @returns a promise that resolves to a boolean
     */
    dataStoreDeleteVerifiableCredential(args: IDataStoreDeleteVerifiableCredentialArgs): Promise<boolean>;
    /**
     * Gets verifiable credential from the data store
     * @param args - arguments for getting verifiable credential
     * @returns a promise that resolves to the verifiable credential
     */
    dataStoreGetVerifiableCredential(args: IDataStoreGetVerifiableCredentialArgs): Promise<VerifiableCredential>;
    /**
     * Saves verifiable presentation to the data store
     * @param args - verifiable presentation
     * @returns a promise that resolves to the hash of the VerifiablePresentation
     */
    dataStoreSaveVerifiablePresentation(args: IDataStoreSaveVerifiablePresentationArgs): Promise<string>;
    /**
     * Gets verifiable presentation from the data store
     * @param args - arguments for getting Verifiable Presentation
     * @returns a promise that resolves to the Verifiable Presentation
     */
    dataStoreGetVerifiablePresentation(args: IDataStoreGetVerifiablePresentationArgs): Promise<VerifiablePresentation>;
}
//# sourceMappingURL=IDataStore.d.ts.map