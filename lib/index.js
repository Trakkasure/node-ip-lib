net=require('net');
FULLMASK=4294967295;

module.exports.isIpv4=net.isIpv4
module.exports.isIpv6=net.isIpv6

function getOctets(mask) {
    var octets=null;
    if (typeof(mask)=='string')
        octets=mask.split(/\./).map(function(m){return parseInt(m)});
    if (!octets||octets.length<2) {
        if (typeof(mask)=='string')
            mask=parseInt(mask);
        if (mask>32)
            intMask=mask;
        else intMask=Math.pow(2,mask)-1;
        console.log(intMask);
        octets=[ intMask&0xff, (intMask&0xff00)>>>8, (intMask&0xff0000)>>>16,  (intMask&0xff000000)>>>24].map(function(m){return m&&m<255?m+1:m});
    }
    return octets;
}

function buildMask(bits) {
    octets=getOctets(bits);
    return {
        intMask:intMask,
        octets:octets,
        mask:octets.map(function(m){return ''+m})
    }
}

// I'm assuming that only good data is passed in here. I'll add error checking later.
module.exports.ip=function(ip,cidr) {
    this.ip=ip;
    this.octets=ip.split(/\./).map(function(m){return parseInt(m)});
    this.bits=cidr||32;
    this.mask=buildMask(cidr||32);
    this.octetmask=this.mask.octets;
    this.mask=this.mask.mask;
}

module.exports.ip.prototype.and=function(mask) {
    octets=getOctets(mask);
    return this.octets.map(function(m,i){return m&octets[i]});
}
module.exports.ip.prototype.or=function(mask) {
    octets=getOctets(mask);
    return this.octets.map(function(m,i){return m|octets[i]});
}
module.exports.ip.prototype.xor=function(mask) {
    octets=getOctets(mask);
    console.log(octets);
    return this.octets.map(function(m,i){return m^octets[i]});
}
module.exports.ip.prototype.not=function() {
    return this.octets.map(function(m,i){return ~octets[i]});
}
