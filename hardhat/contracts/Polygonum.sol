// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Polygonum is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Polygonum", "PLG") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://surf-5c38d.web.app/";
    }

    function buyToken() public payable {
        uint256 tokenId = _tokenIdCounter.current();
        require(msg.value == 0.1 ether, "Wrong amount sent");

        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId); //
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        pure
        override(ERC721)
        returns (string memory)
    {
       return string(abi.encodePacked(_baseURI(), "polygonum_",(tokenId+1),".json"));
    }
// вывод !!
// map
// reentrency attack
    receive() external payable {}
}
