var expect = require('chai').expect;

var Bank = require('./bank');
var Account = require('./account');

describe('Bank', function(){
  beforeEach(function createBank(){
    bank = new Bank('Bank of Zanzibar', 2050);
  })

  it('should have a name and year founded', function(){
    expect(bank.name).to.equal('Bank of Zanzibar');
    expect(bank.founded).to.equal(2050);
  });

  it('should be able to create an account, with a unique id', function(){
    var account = bank.createAccount('Yolanda', 'personal');
    expect(bank.accounts['1']).to.equal(account);
  });

  it('should find id by name', function(){
    bank.createAccount('Yolanda', 'personal');
    var id = bank.idForName('Yolanda');
    expect(id).to.equal('2');
  });

  it('should be find acount by owner name', function(){
    bank.createAccount('Yolanda', 'personal');
    var account = bank.findAccount('Yolanda', bank.idForName.bind(bank));
    expect(account.name).to.equal('Yolanda');
  });

});

describe('Account', function(){
  it('should have a holder\'s name, type, and initial balance of 0', function(){
    var account = new Account('Chuck', 'personal');
    expect(account.name).to.equal('Chuck');
    expect(account.type).to.equal('personal');
    expect(account.balance).to.equal(0);
  });
});