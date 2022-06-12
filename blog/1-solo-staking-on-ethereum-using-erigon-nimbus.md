---
slug: solo-staking-on-ethereum-using-erigon-nimbus
title: How to start solo staking on Ethereum using Erigon and Nimbus
authors: andrew
tags: [ethereum, staking, erigon, nimbus]
hide_table_of_contents: true
---

# Inspiration

- https://mtlynch.io/budget-nas/

# Ideas

- Make a detailed youtube video for blog post
- Make a youtube channel (link to blog + twitter)

# Steps

- Assemble your NUC
- Plugin backup power, etc
- Flash Linux (Ubuntu Server) onto USB drive
- Instal Linux (follow steps) -- Install with snap and openSSH turned on
- Within home dir, create a folder called `ethereum`. We'll install everything inside here to keep things organized

- Test your Network speed

  - Install `sudo apt install speedtest-cli`
  - Run `speedtest-cli`

- Install network tools: run `sudo apt install net-tools`

- Enable SSH on your NUC https://linuxize.com/post/how-to-enable-ssh-on-ubuntu-20-04/

  - Run `sudo systemctl status ssh` to ensure SSH is turned on
  - Open `ssh` in the firewall: `sudo ufw allow ssh`

- Run `sudo apt update` to ensure your packages are updated
- Run `sudo apt install build-essential` This will install two important dependencies that are required before running Erigon and Nimbus: `gcc` and `make`.
- Verify that `gcc` is installed by running `gcc --version`
- Verify that `make` is installed by running `make --version`
- Install golang by running `sudo snap install go --classic`

### Resources

- https://github.com/coincashew/coincashew/tree/master/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet

### Lock down your NUC

- https://github.com/coincashew/coincashew/blob/master/coins/overview-eth/guide-or-security-best-practices-for-a-eth2-validator-beaconchain-node.md

### Install Chrony to ensure time clock is synced

- https://github.com/coincashew/coincashew/blob/master/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet/part-i-installation/synchronizing-time-with-chrony.md

### Ensure your entire hard drive is available

- https://github.com/coincashew/coincashew/blob/master/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet/part-iii-tips/using-all-available-lvm-disk-space.md
- https://askubuntu.com/questions/1106795/ubuntu-server-18-04-lvm-out-of-space-with-improper-default-partitioning

### Install Erigon

- Run `cd ~/ethereum`
- Refer to Erigon's installtion guide and system requirements: https://github.com/ledgerwatch/erigon#system-requirements
- Run `git clone --recurse-submodules -j8 https://github.com/ledgerwatch/erigon.git`
- Run `cd erigon`
- Run `make erigon`
- Start the Erigon client `./build/bin/erigon --chain goerli --datadir data-goerli --authrpc.jwtsecret data-goerli --torrent.download.rate=20mb`

### Useful commands

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

<!--truncate-->

# Terminology

- **Nodes**: a computer running a piece of Ethereum client software
- **Clients**: an implementation of Ethereum that verifies all transactions in each block, keeping the network secure and the data accurate.
- **Validators**: active participants in the Ethereum proof-of-stack consensus
- **JSON RPC**:
- **Full node**: A full “Ethereum Node” after the proof-of-stake upgrade must consist of both an Execution and Consensus client.
- **CL**: Consensus layer
- **EL**: Execution layer
- **Epoch**: (~6.4 minutes)

# Commands

- `sudo apt update` - Update package version
- `sudo apt upgrade` - Actually Update packages
- `pidof geth`
- `kill -9 60098`
- `./build/bin/downloader torrent_hashes --verify --datadir=`
- `free -h` See how much RAM is being used
- `systemctl --type=service` List all running services
- `sudo systemctl stop nimbus-eth2-prater.service` Stop nimbus service
- `sudo /usr/local/bin/noip2 -S` See status of noip daemon
- `systemctl reset-failed` Reset all failed services
- `lsof -n -i:9090 | grep LISTEN` Figure out what's running at a specific port:

geth --goerli --ws --datadir /home/andrew/ethereum/geth/data-goerli

sudo apt-get install -y prometheus prometheus-node-exporter

sudo ufw allow https

# Steps:

## Start Geth

`geth --goerli --authrpc.jwtsecret /home/andrew/ethereum/jwt --http --ws --metrics --metrics.expensive --pprof`

## Start the Nimbus validator:

`./run-prater-beacon-node.sh --web3-url="ws://127.0.0.1:8546" --subscribe-all-subnets --metrics --metrics-port=8008`

## Create the validator(s):

- https://nimbus.guide/run-a-validator.html

1.  Generate keys (turn off internet)
    detection active - skipping validator duties while observing activity on the network
