// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

contract ShareStream  {
    // videoCount is at start 0
    uint256 public videoCount = 0;

    // Contract name
    string public name = "ShareStream";

    // mapping of videocount to video
    mapping(uint256 => Video) public videos;

    // Structure describing video properties
    struct Video {
        uint256 id;
        string has;
        string title;
        string description;
        string location;
        string category;
        string thumbnailHash;
        string date;
        address author;
    }

    // Event --> VideoUploaded
    event VideoUploaded (
        uint256 id,
        string has,
        string title,
        string description,
        string location,
        string category,
        string thumbnailHash,
        string date,
        address author
    );

    constructor() {}

    // Fuction to upload a video
    function uploadVideo(
        string memory _videoHash_,
        string memory _title_,
        string memory _description_,
        string memory _location_,
        string memory _category_,
        string memory _thumbnailHash_,
        string memory _date_
    ) public {
        // Vaidating videoHash, title and author's address
        string memory str = string(abi.encodePacked(_videoHash_));
        bytes memory myBytes = abi.decode(bytes(str), (bytes));
        require(myBytes.length > 0);
        require(bytes(_title_).length > 0);
        require(msg.sender != address(0));

        // Incrementing video count
        videoCount++;
     // Adding video to the contract
        videos[videoCount] = Video(
            videoCount,
            _videoHash_,
            _title_,
            _description_,
            _location_,
            _category_,
            _thumbnailHash_,
            _date_,
            msg.sender
        );

        // Triggering the event

        emit VideoUploaded(
            videoCount,
            _videoHash_,
            _title_,
            _description_,
            _location_,
            _category_, 
            _thumbnailHash_,
            _date_,
            msg.sender    
        );
    }



}