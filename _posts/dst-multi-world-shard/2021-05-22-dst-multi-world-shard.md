---
layout: post
title: "Multiple Worlds Shard Configuration"
date: 2021-05-22 18:39:00 +0800
categories: dst
---

Friends are having a Don't Starve Together dedicated server and want multiple worlds linking together.

# Worlds

Firstly, generate new worlds in your local game. Rename worlds folder name and copy to dedicate server.

Next, we need to configure `server.ini` file for each shard (world).

## Master

There is no modification needed.

```
[NETWORK]
server_port = 10999


[SHARD]
is_master = true


[ACCOUNT]
encode_user_path = true
```

## Other worlds

1. Make sure to give them an `id` that is unique from all other shards. For convinience, name them as `1`, `2`, etc. Master is default as `1`.
2. Server `port` must be unique. Master is `10999` then the second world could be `10998`, etc.
3. `master_server_port` and `authentication_port` must be unique.
4. `is_master` must be false.
5. Give world its own `name`.

```
[NETWORK]
server_port = 10998 -- unique, 10999 10998 10997...


[SHARD]
is_master = false
name = Caves
id = 2 -- unique, 1 2 3...


[ACCOUNT]
encode_user_path = true


[STEAM]
master_server_port = 27017 -- unique, 27017 27018 27019...
authentication_port = 8767 -- unique, 8767 8768 8769...
```

# Mods

Firstly we need a mod to link portals (cave entrance/exit) with other portals from another world.

Initially we used [Shard Configuration Mod](https://steamcommunity.com/sharedfiles/filedetails/?id=595764362) to link, but a better option would be [MultiWorlds Shard Configuration](https://steamcommunity.com/sharedfiles/filedetails/?id=2275612798).

## MultiWorlds Shard Configuration

In your master overworld folder, configure your worlds information in `modoverrides.lua` file.

```
["workshop-2275612798"]={
    -- MultiWorlds Shard Configuration Mod
    ["configuration_options"]={
        ["Connections"]={
            ["1"] = {"2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7", "2-8", "2-9", "2-10"},
            ["2"] = {"1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-8", "1-9", "1-10"},
            ["3"] = {"4-1", "4-2", "4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9", "4-10"},
            ["4"] = {"3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8", "3-9", "3-10"}
        },
        ["DeleteUnused"]=false,
        ["ShardSigns"]={
            ["1"] = "Master",
            ["2"] = "Caves-1",
            ["3"] = "Caves-2",
            ["4"] = "Caves-3"
        },
        ["SyncFromMaster"]=true
    },
    ["enabled"]=true
},
```

![https://steamuserimages-a.akamaihd.net/ugc/1691625649119912635/96B778BF02B03866D043579F8AD9AED7DF1A6B8F/](https://steamuserimages-a.akamaihd.net/ugc/1691625649119912635/96B778BF02B03866D043579F8AD9AED7DF1A6B8F/)
