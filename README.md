## Condition based Token

**Condition based token is a wrapper that locks the underlying token under user defined condition contract.**



-   **1**: You can send tokens to another contract with predifined condition written in condition contract.
-   **2**: In this project I had created a condition where the user can transfer the underlying token to another address whose credit score is above certain threshold which is verififed by Ethereum Attestation Service attestation.
-   **3**: The Condition contract is a Diamond Proxy contract, hence you can update specific functions and can get granularity in updating the contracts.

